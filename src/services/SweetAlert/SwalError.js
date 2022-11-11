import Swal from 'sweetalert2'

export const SwalError = () => {
    Swal.fire({
        title: 'Lo sentimos',
        text: 'Se produjo un error',
        toast: true,
        customClass: 'swalError'
    })
}
