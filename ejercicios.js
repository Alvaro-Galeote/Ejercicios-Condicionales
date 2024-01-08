let numeroEjercicio = parseInt(prompt("Introduzca un numero del 1 al 11 para revisar el ejercicio que desee"));
    switch(numeroEjercicio){
        case 1:
            let respuesta = prompt("¿Eres bellisimo/a?");
                if(respuesta=="si"  || respuesta=="SI" || respuesta=="sI" || respuesta=="Si"){
                    console.log("Ciertamente");
                }else{
                    console.log("No te creo");
                }
            break;
    
        case 2:
            let numeroRecibido = prompt("Por favor, ingresa un numero entero:");
                if(numeroRecibido%2==0){
                    console.log(`El ${numeroRecibido} es divisible entre 2`);
                }else{
                    console.log(`El ${numeroRecibido} no es divisible entre 2`);
                }
            break;
        
        case 3:
            numeroRecibido = prompt("Por favor, ingresa un numero entero:");
                if(numeroRecibido%2==0){
                    alert(`El ${numeroRecibido} es divisible entre 2`);
                }else{
                    alert(`El ${numeroRecibido} no es divisible entre 2`);
                }
            break;
        
        case 4:
            let numeroDeCliente = parseInt(prompt("Por favor, ingresa un numero de cliente"));
                if(numeroDeCliente==1000){
                    console.log("Ganaste un premio");
                }else{
                    console.log(`${numeroDeCliente} Lo sentimos, sigue participando`);
                }
            break;

        case 5:
            let a,b;
                a = parseInt(prompt("Ingresa el primer numero:"));
                b = parseInt(prompt("Ingresa un segundo numero:"));

                if(a<b){
                    console.log(`El ${a} es menor`);
                }else{
                    console.log(`El ${b} es menor`);
                }
            break;

        case 6:
            let c;
            a = parseInt(prompt("Ingresa el primer numero:"));
            b = parseInt(prompt("Ingresa un segundo numero:"));
            c = parseInt(prompt("Ingresa un tercer numero"));

            if(a==b && b!=c){
                if(a>c){
                    console.log(`El ${a} es el numero mayor y es igual al segundo valor introducido`);
                }else if(c>b){
                    console.log(`El ${c} es el numero mayor`);
                }
            }else if(a==c && c!=b){
                if(a>b){
                    console.log(`El ${a} es el numero mayor y es igual al tercer valor introducido`);
                }else if(b>c){
                    console.log(`El ${b} es el numero mayor`);
                }
            }else if(b==c && c!=a){
                if(b>a){
                    console.log(`El ${b} es el numero mayor y es igual al tercer valor introducido`);
                }else if(a>c){
                    console.log(`El ${a} es el numero mayor`);
                }
            }else if(a>b && a>c){
                console.log(`El ${a} es el numero mayor`);
            }else if(b>a && b>c){
                console.log(`El ${b} es el numero mayor`);
            }else if(c>a && c>b){
                console.log(`El ${c} es el numero mayor`);
            }else{
                console.log("Trabajando en los otros casos aun.");
            }
            break;

        case 7:
            let dia=prompt("Ingresa un dia de la semana");
            if(dia =="Lunes" || dia=="lunes"){
                console.log("Es el primero");
            }else if(dia=="Martes" || dia=="martes"){
                console.log("Es el segundo");
            }else if(dia=="Miercoles" || dia=="miercoles"){
                console.log("Es el tercero");
            }else if(dia=="Jueves" || dia=="jueves"){
                console.log("Es el cuarto");
            }else if(dia=="Viernes" || dia=="viernes"){
                console.log("Es el quinto");
            }else if(dia=="Sabado" || dia=="sabado"){
                console.log("Es el sexto");
            }else if(dia=="Domingo" || dia=="domingo"){
                console.log("Es el septimo");
            }else{
                console.log("Cuidado!! Lo que ingresaste no es un dia valido");
            }
            break;
    
        case 8:
            let calificacion = parseFloat( prompt("Ingrese una nota de calificacion entre 1-10"));
                if(calificacion>=1 && calificacion <=10){
                    if(calificacion<6){
                        console.log("reprobado");
                    }else if(calificacion>=6 && calificacion<=8){
                        console.log("regular");
                    }else if(calificacion==9){
                        console.log("bien");
                    }else if(calificacion==10){
                        console.log("excelente");
                    }
                }else{
                    console.log("ERROR! No es una calificacion valida");
                }
            break;

        case 9:
            const precioHeladoSinTopping=50;
            const precioHeladoToppingOreo=10;
            const precioHeladoToppingKitKat=15;
            const precioHeladoToppingBrownie=20;
                let eleccionDeHelado=prompt(" Helado Sin topping\n Topping de Oreo\n Topping de KitKat\n Topping de Brownie\n Ingrese que tipo de helado desea conocer el precio");
                    if(eleccionDeHelado=="Sin topping" || eleccionDeHelado=="Sin Topping" ||eleccionDeHelado=="sin topping"){
                        alert(`El ${eleccionDeHelado} tiene un precio de $ ${precioHeladoSinTopping}`);
                    }else if(eleccionDeHelado=="Topping de Oreo" || eleccionDeHelado=="Topping de oreo" || eleccionDeHelado=="topping de oreo"){
                        alert(`El ${eleccionDeHelado} tiene un precio de $ ${precioHeladoToppingOreo}`);
                    }else if(eleccionDeHelado=="Topping de KitKat" || eleccionDeHelado=="Topping de kitkat" || eleccionDeHelado=="topping de kitkat" || eleccionDeHelado=="Topping de Kitkat"){
                        alert(`El ${eleccionDeHelado} tiene un precio de $ ${precioHeladoToppingKitKat}`);
                    }else if(eleccionDeHelado=="Topping de Brownie" || eleccionDeHelado=="Topping de brownie" || eleccionDeHelado=="topping de brownie"){
                        alert(`El ${eleccionDeHelado} tiene un precio de $ ${precioHeladoToppingBrownie}`);
                    }else{
                        alert("No tenemos este topping, lo sentimos.");
                        alert(`Helado sin topping tiene un costo de ${precioHeladoSinTopping}`);
                    }
            break;

        case 10:
            let programaEducativo=prompt(" Course: $4999 MXN \n Carrera: $3999 MXN \n Master: $2999 MXN \n Elija el programa educativo");
            const precioCourse=4999;
            const precioCarrera=3999;
            const precioMaster=2999;
            const becaFacebook=0.20;
            const becaGoogle=0.15;
            const becaJesua=0.5;
            let duracionMeses=null;

            let respuestaDeBeca=null;
            let descuentoBeca=null;
            let totalPorMes=null;
            let totalDelCurso=null;

            let precioPrograma=null;
            if(programaEducativo=="Course" || programaEducativo=="course"){
                duracionMeses=2;
                totalPorMes=precioCourse;
                precioPrograma=precioCourse;
            }else if(programaEducativo=="Carrera" || programaEducativo=="carrera"){
                duracionMeses=6;
                totalPorMes=precioCarrera;
                precioPrograma=precioCarrera;
            }else if(programaEducativo=="Master" || programaEducativo=="master"){
                duracionMeses=12;
                totalPorMes=precioMaster;
                precioPrograma=precioMaster;
            }

            respuestaDeBeca=prompt("Cuenta con alguna de las siguientes Becas:\n Beca Facebook\n Beca Google\n Beca Jesua\n [S/N]");
            if(respuestaDeBeca=="S" || respuestaDeBeca=="s"){
                nombreDeBeca=prompt(" Beca Facebook\n Beca Google\n Beca Jesua\n Ingrese el nombre de la beca con la que cuenta:")
                
                    if(nombreDeBeca=="Facebook" || nombreDeBeca=="facebook"){
                        descuentoBeca=precioPrograma*becaFacebook;
                    }else if(nombreDeBeca=="Google" || nombreDeBeca=="google"){
                        descuentoBeca=precioPrograma*becaGoogle;
                    }else if(nombreDeBeca=="Jesua" || nombreDeBeca=="jesua"){
                        descuentoBeca=precioPrograma*becaJesua;
                    }
                    totalPorMes=precioPrograma-descuentoBeca;
                    totalDelCurso=totalPorMes*duracionMeses;
                    alert(`Tienes el programa de ${programaEducativo}\n Cuentas con la beca ${nombreDeBeca}\n Pagaras con descuento por mes la cantidad de ${totalPorMes}\n Pagaras por todo el curso la cantidad de ${totalDelCurso}`);
            }else{
                totalDelCurso=totalPorMes*duracionMeses;
                alert(`Tienes el programa de ${programaEducativo}\n No cuentas con beca\n Pagaras por mes la cantidad de ${totalPorMes}\n Pagaras por todo el curso la cantidad de ${totalDelCurso}`);
            }
            break;

        case 11:
        let vehiculo= prompt(" Coche\n Moto\n Autobus\n Por favor, ingrese el nombre del tipo de vehiculo que utilizara");
        const precioKmCoche=0.20;
        const precioKmMoto=0.10;
        const precioKmAutobus=0.5;
        let extraPorLitros=null;
        let precioKmVehiculo=null;
        let totalAlquilerVehiculo=null;

        let distanciaRecorrida=prompt("Ingrese por favor el numero de Km");
        let litrosConsumidos=prompt("Ingrese la cantidad de litros consumidos");

        if(vehiculo=="Coche" || vehiculo=="coche"){
            precioKmVehiculo=precioKmCoche;
        }else if(vehiculo=="Moto" || vehiculo=="moto"){
            precioKmVehiculo=precioKmMoto;
        }else if(vehiculo=="Autobus" || vehiculo=="autobus"){
            precioKmVehiculo=precioKmAutobus;
        }

        if(litrosConsumidos>=0 && litrosConsumidos<=100){
            extraPorLitros=5;
        }else if(litrosConsumidos>100){
            extraPorLitros=10;
        }

        totalAlquilerVehiculo=(precioKmVehiculo*distanciaRecorrida)+extraPorLitros;
        alert(`Usted tendra que pagar un total de ${totalAlquilerVehiculo}`);
        break;
    }