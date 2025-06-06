interface iCourse {
    nome: string,
    horas: number,
    tags: string[]
}

function isCourse(item: any): item is iCourse {
    if ('nome' in item && 'horas' in item && 'tags' in item) {
        return true
    }
    return false
}

async function getCourses(url: string) {
    const response  = await fetch(url)
    return await response.json()
}

function handleCourses(json: unknown) {
    if(Array.isArray(json)) {
        json.filter((item) => {
            if(isCourse(item)) {
                console.log(item.nome)
            }
        })
    }
}

const response = getCourses('https://api.origamid.dev/json/cursos.json')

response.then(data => {
    handleCourses(data)
})