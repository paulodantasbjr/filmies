import {Request, Response} from "express"

import {UserModel} from '@models/UserModel'

export const userController = {
  update: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const paramsID = req.params.id
      const userID = req.user.id

      if (!(userID === paramsID || isAdmin)) {
        res.status(404).json({error: "Voce nao tem permissao!"})
      }

      const user = await UserModel.findByIdAndUpdate(paramsID, {
        $set: req.body
      }, {new: true});
      if (! user) {
        return res.status(400).json({error: "Erro ao atualizar o usuario."})
      }

      res.status(200).json({msg: "Usuario atualizado com sucesso!"})
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  delete: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const paramsID = req.params.id
      const userID = req.user.id

      if (!(userID === paramsID || isAdmin)) {
        res.status(404).json({error: "Voce nao tem permissao!"})
      }

      const user = await UserModel.findByIdAndDelete(paramsID);
      if (! user) {
        return res.status(400).json({error: "Erro ao deletar o usuario."})
      }

      res.status(200).json({msg: "Usuario deletado com sucesso!"})
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  getAll: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const query = req.query.new

      if (! isAdmin) {
        res.status(403).json({error: "Voce nao tem permissao de visualizar todos os usuarios!"})
      }

      const users = query ? await UserModel.find().sort({_id: -1}).limit(5) : await UserModel.find();
      if (! users) {
        return res.status(400).json({error: "Erro ao buscar todos os usuarios."})
      }

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err.message);

    }
  },
  get: async (req : Request, res : Response) => {
    try {
      const paramsID = req.params.id

      const user = await UserModel.findById(paramsID);
      if (! user) {
        return res.status(400).json({error: "Usuario nao encontrado."})
      }

      const newUser = {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
        isAdmin: user.isAdmin
      }

      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err.message);
    }

  },
  getStatus: async (req : Request, res : Response) => {
    try {
      const data = await UserModel.aggregate([
        {
          $project: {
            month: {
              $month: "$createdAt"
            }
          }
        }, {
          $group: {
            _id: "$month",
            total: {
              $sum: 1
            }
          }
        },
      ]);
      res.status(200).json(data)

    } catch (err) {
      res.status(500).json(err);
    }

  }
}
