import {Request, Response, NextFunction} from 'express'
import {verify} from "jsonwebtoken";

export const verifyAuth = (req : Request, res : Response, next : NextFunction) => {
  try {
    const token = req.headers.authorization
    if (! token) {
      return res.status(400).json({error: "Autenticacao invalida"})
    }

    verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(400).json({error: "Erro na validacao"})
      }
      req.user = user
      next()
    })

  } catch (err) {
    return res.status(500).json({error: err.message})
  }


}
