import {Request, Response} from "express";
import {ListModel} from '@models/ListModel'

export const listController = {
  create: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const data = req.body

      if (! isAdmin) {
        res.status(403).json({error: 'Voce nao tem permissao!'});
      }

      const newList = new ListModel(data);
      if (! newList) {
        res.status(403).json({error: 'Erro ao cadastrar lista!'});
      }

      const savedList = await newList.save();
      if (! savedList) {
        res.status(403).json({error: 'Erro ao cadastrar lista!'});
      }


      res.status(201).json({msg: 'Lista cadastrada com sucesso!'});

    } catch (err) {
      res.status(500).json(err.message);
    }

  },
  delete: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      if (! isAdmin) {
        res.status(403).json({error: ' Voce nao tem permissao!'});
      }

      const paramsID = req.params.id
      const list = await ListModel.findByIdAndDelete(paramsID);
      if (! list) {
        res.status(403).json({error: ' Erro ao deletar lista!'});
      }

      res.status(201).json({msg: 'Lista deletada com sucesso!'});

    } catch (err) {
      res.status(500).json(err.message);

    }
  },
  get: async (req : Request, res : Response) => {
    try {
      const typeQuery = req.query.type;
      const genreQuery = req.query.genre;
      let list = [];
      if (typeQuery) {
        if (genreQuery) {
          list = await ListModel.aggregate([
            {
              $sample: {
                size: 10
              }
            }, {
              $match: {
                type: typeQuery,
                genre: genreQuery
              }
            },
          ]);
        } else {
          list = await ListModel.aggregate([
            {
              $sample: {
                size: 10
              }
            }, {
              $match: {
                type: typeQuery
              }
            },
          ]);
        }
      } else {
        list = await ListModel.aggregate([{
            $sample: {
              size: 10
            }
          }]);
      }
      res.status(200).json(list);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  update: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const paramsID = req.params.id

      if (! isAdmin) {
        res.status(403).json({error: "Voce nao tem permissao!"});
      }

      const updatedList = await ListModel.findByIdAndUpdate(paramsID, {
        $set: req.body
      }, {new: true});
      if (! updatedList) {
        res.status(403).json({error: "Erro ao atualizar!"});
      }

      res.status(200).json({msg: 'Atualizado com sucesso!'});
    } catch (err) {
      res.status(500).json(err.message);
    }

  }
}
