class Polygon {
  constructor(array){
      this.array = array
  }

  get countSides(){
      return this.array.length
  }

  get perimeter(){
      let counter = 0
      for(let i = 0; i < this.array.length; i++){
          counter += this.array[i]
      }
      return counter
  }
}

class Triangle extends Polygon{
  constructor(...args){
      super(...args)
  }

  get isValid(){
      if((this.array[0] + this.array[1] > this.array[2]) && (this.array[1] + this.array[2] > this.array[0]) && (this.array[0] + this.array[2] > this.array[1])){
          return true
      }else{
          return false
      }
  }
}

class Square extends Polygon{
  constructor(...args){
      super(...args)
  }

  get isValid(){
      if(this.perimeter / 4 === this.array[0]){
          return true
      }else{
          return false
      }
  }

  get area(){
      return this.array[0] * this.array[0]
  }
}