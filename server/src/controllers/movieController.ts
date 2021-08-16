import {Request, Response} from "express";
import {MovieModel} from '@models/MovieModel'


export const movieController = {
  create: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const data = req.body

      if (! isAdmin) {
        res.status(403).json("Voce nao tem permissao!");
      }

      const movie = new MovieModel(data);
      if (! movie) {
        return res.status(400).json({error: "Erro ao cadastrar!"})
      }

      const savedMovie = await movie.save();
      if (! savedMovie) {
        return res.status(400).json({error: "Erro ao cadastrar!"})
      }


      res.status(201).json({msg: "Cadastrado com sucesso!"})


    } catch (err) {
      res.status(500).json({error: err.message});
    }
  },
  update: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const paramsID = req.params.id

      if (! isAdmin) {
        res.status(403).json({error: "Voce nao tem permissao!"});
      }

      const updatedMovie = await MovieModel.findByIdAndUpdate(paramsID, {
        $set: req.body
      }, {new: true});
      if (! updatedMovie) {
        res.status(403).json({error: "Erro ao atualizar!"});
      }

      res.status(200).json({msg: 'Atualizado com sucesso!'});
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  delete: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      const paramsID = req.params.id

      if (! isAdmin) {
        res.status(403).json({error: "Voce nao tem permissao!"});
      }

      const movie = await MovieModel.findByIdAndDelete(paramsID);
      if (! movie) {
        res.status(403).json({error: "Erro ao deletar!"});
      }

      res.status(200).json({msg: "Deletado com sucesso"});
    } catch (err) {
      res.status(500).json(err.message);
    }

  },
  getAll: async (req : Request, res : Response) => {
    try {
      const isAdmin = req.user.isAdmin
      if (! isAdmin) {
        res.status(403).json({error: 'Voce nao tem permissao'});
      }
      const movies = await MovieModel.find();
      if (! movies) {
        res.status(403).json({error: 'Erro ao procurar'});
      }
      res.status(200).json(movies.reverse());

    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  get: async (req : Request, res : Response) => {
    try {
      const paramsID = req.params.id

      const movie = await MovieModel.findById(paramsID);
      if (! movie) {
        res.status(403).json({error: 'Erro ao procurar'});
      }

      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  random: async (req : Request, res : Response) => {
    try {
      const type = req.query.type;
      let movie;
      if (type === "series") {
        movie = await MovieModel.aggregate([
          {
            $match: {
              isSeries: true
            }
          }, {
            $sample: {
              size: 1
            }
          },
        ]);
      }
      if (type === "filmes") {
        movie = await MovieModel.aggregate([
          {
            $match: {
              isSeries: false
            }
          }, {
            $sample: {
              size: 1
            }
          },
        ]);
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}
