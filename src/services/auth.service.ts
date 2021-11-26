import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {User} from "../models";
import {config} from '../config/config';
import {repository} from "@loopback/repository";
import {UserRepository} from "../repositories";

const generator = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(
      @repository(UserRepository)
      public userRepository: UserRepository,
  ) {}

  //Generacion de claves
  GenerarClave() {
    let clave = generator(8, false);
    return clave;
  }

  CifrarClave(clave: String) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  GenerarTokenJWT(usuario: User) {
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.email,
        nombre: usuario.name + " " + usuario.lastName
      }
    }, config.claveJWT)

    return token
  }

  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, config.claveJWT);
      return datos;
    } catch (error) {
      return false;
    }
  }

  IdentificarPersona(correo: string, password: string) {
    try {
      let p = this.userRepository.findOne({where: {email: correo, password: password}})
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }



}
