export interface Usuario {
    id: number
    name: string
  
    tareas: Tarea[]
  }
  
  export interface Tarea {
    id: number
    name: string
    tipo: string
    duracion: string
  }