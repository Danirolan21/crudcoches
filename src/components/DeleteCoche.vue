<template>
  <div>
    <h1>Delete Coche</h1>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches.js";
import Swal from 'sweetalert2';

const service = new ServiceCoches();

export default {
  name: "DeleteCoche",
  mounted() {
    let idCoche = this.$route.params.id;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure you want to delete Car with id:" + idCoche + "?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          service.deleteCoche(idCoche).then(result => {
            console.log(result);
            swalWithBootstrapButtons
            .fire({
              title: "Deleted!",
              text: "Your Car has been deleted.",
              icon: "success",
            })
            .then((result) => {
              console.log(result);
              this.$router.push("/")              
            });
          })
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Car is safe :)",
            icon: "error",
          })
          .then((result) => {
              console.log(result);
              this.$router.push("/")              
          });
        }
      });
  },
};
</script>

<style>
</style>