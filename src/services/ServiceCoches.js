import Global from "@/Global";

export default class ServiceCoches {
    getCoches() {
        return new Promise( function(resolve) {
            let request = "api/Coches";

            let url = Global.urlApiCoches + request;
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data));
        })
    }

    insertCoche (coche) {
        return new Promise( function(resolve) {
            let request = "api/Coches/InsertCoche";

            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify(coche)
            })
            .then(data => resolve(data));
        })
    }

    findCoche(idCoche) {
        return new Promise( function(resolve) {
            let request = "api/Coches/FindCoche/" + idCoche;

            let url = Global.urlApiCoches + request;
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data));
        })
    }

    updateCoche (coche) {
        return new Promise( function(resolve) {
            let request = "api/Coches/UpdateCoche";

            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "PUT",
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify(coche)
            })
            .then(data => resolve(data));
        })
    }

    deleteCoche (idCoche) {
        return new Promise( function(resolve) {
            let request = "api/Coches/DeleteCoche/" + idCoche;

            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json" 
                }
            })
            .then(data => resolve(data));
        })
    }
}