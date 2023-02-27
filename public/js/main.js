const form_home_Itens = document.querySelectorAll('.form-select')// Seleciona todos os itens o formulário
const select_edit     = document.querySelector('#options')
const select_main     = document.querySelector('#options_select')
const form = document.querySelector('#form-home')


const typeofCompare = async()=>{
    return await select_edit.value
}

select_edit.onchange = ()=>{
    form.style.display = "flex"
    console.log("**************//*****************");
    console.dir(form_home_Itens[0].parentElement.parentElement);
    console.log("**************//*****************");
    form_home_Itens.forEach(item=>{
        if(select_main.value != item.id){
        item.parentElement.parentElement.style.display = "none"
        }
       
    })
}
