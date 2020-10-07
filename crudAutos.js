import cars from './autos.js';

// let ideditingCar = 0;

function printAllCars(){
    const carsBody = document.getElementById("body-cars");
    carsBody.innerHTML = " ";
    cars.forEach((car)=>{
        const row = `<tr id="row-car-${car.id}">
                        <td>
                            <input type="text" class="form-control" class="marca" value="${car.marca}" disabled='true'>
                        </td>
                        <td>
                            <input type="text" class="form-control" class="modelo" value="${car.modelo}" disabled='true'>
                        </td>
                        <td>
                            <input type="text" class="form-control" class="color" value="${car.color}" disabled='true'>
                        </td>
                        <td>
                            <input type="number" class="form-control" class="año" value="${car.año}" disabled='true'>
                        </td>
                        <td>
                            <input type="text" class="form-control" class="precio" value="${car.precio}" disabled='true'>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editCar(${car.id})">Editar</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="remove(${car.id})">Eliminar</button>
                        </td>
                    </tr>`
        carsBody.innerHTML += row;
    })
}


function editCar(id){
    const row = document.getElementById(`row-car-${id}`)
    const inputs = row.getElementsByTagName('input');
    // convierto mi collección de elemntos en un array para poder manipularlo con el foreach
    const arrayInputs = Array.from(inputs);
    arrayInputs.forEach(input => {
        // 
        if(input.disabled === true){
            input.disabled = false;
        }else{
            input.disabled = true;
        }
    });

}
function remove(id) {
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    printAllCars()
}

function getId(){
    let max = 0;
    for(let i = 0; i < cars.length; i++){
        if(cars[i].id > max){
            max = cars[i].id;
        }
    }
    return max + 1;
}

function addCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const id = getId();

    const newCar = {marca,modelo,color,año,precio,id};

    cars.push(newCar);

    alert("Se agrego nuevo auto");
    printAllCars();

}

printAllCars();

window.addCar = addCar;
window.getId = getId;
window.editCar = editCar;
window.remove = remove;