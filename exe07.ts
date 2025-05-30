enum CourseLevel {
    iniciante = 'iniciante',
    avancado = "avancado"
}

interface Course {
    nome: string,
    horas: number,
    aulas: number,
    gratuito: boolean,
    tags: string[],
    idAulas: number[],
    nivel: CourseLevel
}




function returnTag(tag: string): string {
    return `<span>${tag}</span>`

}

function showCourses(data: Course) {
        document.body.innerHTML += `
        <div>
            <h2>nome: ${data.nome}<h2>
            <p>horas: ${data.horas}<p>
            <p>aulas: ${data.aulas}<p>
            <p>gratuito?: ${data.gratuito ? "sim" : "não"}<p>
            <p>nivel do curso: ${data.nivel}<p>
            ${data.tags.map((item) => returnTag(item))}

            
        </div>
    `

}

async function fetchCourse(url: string) {
    const response: Response = await fetch(url)
    const data: Course[] = await response.json()
    data.forEach((item) => {
        showCourses(item)
    })
    

}

fetchCourse('http://api.origamid.dev/json/cursos.json').then(() => {
    console.log('sucesso')
}).catch((err) => {
    console.log(err)
})