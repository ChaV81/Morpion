import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigGameService {

  constructor() { }
  play(event: any, cell: any) {
    if (event % 2){
      cell.innerHTML = "X"
    }else{
      cell.innerHTML = "O"
    }
  } 

  resolveAfter(text: string) {
    return new Promise(resolve =>{
      setTimeout(() => {
        resolve(alert(text));
      }, 100);
    })
  }

  reloadAfter() {
    return new Promise(resolve =>{
      setTimeout(() => {
        resolve(window.location.reload());
      }, 200);
    })
  }

  callFunc(text: string){
    this.resolveAfter(text)
    this.reloadAfter()
  }
  
  textMatchNull = "Match null, vous n'avez plus qu'à recommencer !"
  matchNull(){
    let caseTd = document.getElementsByTagName('td');
    let arrayValue = [];
    for(var i = 0; i < caseTd.length; i++) {
      if(caseTd[i].innerHTML !== ''){
        arrayValue.push(caseTd[i])
      }
    }
    if (arrayValue.length === 9){
      for(var i = 0; i < caseTd.length; i++) {
        caseTd[i].classList.add('bgRed')
        }
      this.callFunc(this.textMatchNull);
    }
    
  }
  winnerText = "Félicitations, tu as gagné !!! Redirection imminente vers le formulaire d'accueil, A bientôt !"
  didIWin() {
    console.log('coucou1')
    let td1 = document.getElementById('td1')?.innerHTML;
    let td2 = document.getElementById('td2')?.innerHTML;
    let td3 = document.getElementById('td3')?.innerHTML;
    let td4 = document.getElementById('td4')?.innerHTML;
    let td5 = document.getElementById('td5')?.innerHTML;
    let td6 = document.getElementById('td6')?.innerHTML;
    let td7 = document.getElementById('td7')?.innerHTML;
    let td8 = document.getElementById('td8')?.innerHTML;
    let td9 = document.getElementById('td9')?.innerHTML;
  

    let wayToWin0 = ((td1 === "X" && td2 === "X" && td3 === "X") || (td1 === "O" && td2 === "O" && td3 === "O"));
    let wayToWin1 = ((td4 === "X" && td5 === "X" && td6 === "X") || (td4 === "O" && td5 === "O" && td6 === "O"));
    let wayToWin2 = ((td7 === "X" && td8 === "X" && td9 === "X") || (td7 === "O" && td8 === "O" && td9 === "O"));
    let wayToWin3 = ((td1 === "X" && td4 === "X" && td7 === "X") || (td1 === "O" && td4 === "O" && td7 === "O"));
    let wayToWin4 = ((td2 === "X" && td5 === "X" && td8 === "X") || (td2 === "O" && td5 === "O" && td8 === "O"));
    let wayToWin5 = ((td3 === "X" && td6 === "X" && td9 === "X") || (td3 === "O" && td6 === "O" && td9 === "O"));
    let wayToWin6 = ((td3 === "X" && td5 === "X" && td7 === "X") || (td3 === "O" && td5 === "O" && td7 === "O"));
    let wayToWin7 = ((td1 === "X" && td5 === "X" && td9 === "X") || (td1 === "O" && td5 === "O" && td9 === "O"));

    let wayToWin = true;

    switch(wayToWin) {
  
      case wayToWin0:
        document.getElementById('td1')?.classList.add('bgGreen')
        document.getElementById('td2')?.classList.add('bgGreen')
        document.getElementById('td3')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin1:
        document.getElementById('td4')?.classList.add('bgGreen')
        document.getElementById('td5')?.classList.add('bgGreen')
        document.getElementById('td6')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin2: 
        document.getElementById('td7')?.classList.add('bgGreen')
        document.getElementById('td8')?.classList.add('bgGreen')
        document.getElementById('td9')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin3:
        document.getElementById('td1')?.classList.add('bgGreen')
        document.getElementById('td4')?.classList.add('bgGreen')
        document.getElementById('td7')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin4:
        document.getElementById('td2')?.classList.add('bgGreen')
        document.getElementById('td5')?.classList.add('bgGreen')
        document.getElementById('td8')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin5:
        document.getElementById('td3')?.classList.add('bgGreen')
        document.getElementById('td6')?.classList.add('bgGreen')
        document.getElementById('td9')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin6:
        document.getElementById('td3')?.classList.add('bgGreen')
        document.getElementById('td5')?.classList.add('bgGreen') 
        document.getElementById('td7')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break
      case wayToWin7:
        document.getElementById('td1')?.classList.add('bgGreen')
        document.getElementById('td5')?.classList.add('bgGreen')
        document.getElementById('td9')?.classList.add('bgGreen')
        this.callFunc(this.winnerText)
        break;
  
      }
  
  
    }
}
