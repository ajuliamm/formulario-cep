const cep = document.getElementById("cep")
const rua = document.getElementById("rua")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")

cep.addEventListener('keyup',()=>{
var cleave = new Cleave('#cep', {
    delimiters: ['-'],
    blocks: [5, 3],
    numericOnly: true
});
}
)

function limpaCampo (){
    if (cep.value === ""){
        rua.value= ''
        bairro.value = ''
        cidade.value = ''        
        estado.value = ''
    }
}
const currentCEP= async (cepValue) => {
    
    const data = await fetch(`https://cdn.apicep.com/file/apicep/${cepValue}.json`)
    .then(response => response.json())
    .catch(function(err){
        console.log(err)
        alert('Cep não encontrado.')

    })

    rua.value=data.address
    bairro.value = data.district
    cidade.value = data.city
    estado.value = data.state

    
    
}


cep.addEventListener('blur', e =>{

    if(e.target.value !== ""){
    let cepValue=e.target.value
    currentCEP(cepValue)
    }
    limpaCampo()
})
