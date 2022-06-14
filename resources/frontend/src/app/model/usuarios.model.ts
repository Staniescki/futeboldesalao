import {enderecoUsuario} from "./endereco_usuario.model";
import {Jogadores} from "./jogadores.model";

export class usuario {
  created_at: any
  email: string
  email_verified_at: any
  endereco_usuario: enderecoUsuario
  id: number
  jogadores: Jogadores
  name: string
  updated_at: any
}
