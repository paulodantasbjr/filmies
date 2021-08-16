import {Request, Response} from 'express'
import {UserModel} from '@models/UserModel'
import {hash, compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'


export const authController = {
  register: async (req : Request, res : Response) => {
    const {name, username, email, password} = req.body
    try {
      const user = await UserModel.findOne({username})
      if (user) {
        return res.status(400).json({error: "Esse usuario ja existe."})
      }

      const emailCheck = await UserModel.findOne({email})
      if (emailCheck) {
        return res.status(400).json({error: "Esse email ja existe."})
      }

      const passwordHash = await hash(password, 10)

      const newUser = new UserModel({name, username, email, password: passwordHash})

      await newUser.save()

      res.status(201).json({msg: 'Registrado com sucesso!'})
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  },
  login: async (req : Request, res : Response) => {
    const {email, password} = req.body

    const user = await UserModel.findOne({email})
    if (! user) {
      return res.status(400).json({error: "Usuario nao existe."})
    }

    const isMatch = await compare(password, user.password.toString())

    if (! isMatch) {
      return res.status(400).json({error: "Senha incorreta."})
    }

    const accessToken = sign({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      isAdmin: user.isAdmin
    }, process.env.SECRET_KEY, {expiresIn: "5d"});

    res.status(200).json(accessToken);
  }
}
