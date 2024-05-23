var model, disper, tem, velmed;

model = prompt("insira o modelo do veiculo: ")
disper = parseFloat(prompt("insira a distancia percorrida (em km):"))
tem= parseFloat(prompt("insira o tempo que levou para percorrer em minutos:"))
velmed = disper / tem;

alert("modelo: " + model + ", distância percorrida: " + disper + " km's, tempo para percorrer: " + tem + " mins, velocidade média: " + velmed)