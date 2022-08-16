function loadService(idService){
    let btnServices = document.getElementsByClassName("btn-service")
    let services = document.getElementsByClassName("service")
    for (let i = 0; i < btnServices.length; i++){
        btnServices[i].classList.remove("btn-service-activate")
        btnServices[i].classList.remove("btn-service-desactivate")
        services[i].classList.remove("service-desactivate")
    }
    btnServices[idService].classList.add("btn-service-activate");
    for (let i = 0; i < btnServices.length; i++){
        if(i!=idService){
            btnServices[i].classList.add("btn-service-desactivate")
            services[i].classList.add("service-desactivate")
        }        
    }
}