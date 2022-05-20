const {getUser} = require('vitor-toolkit')


const main = async () => {
    const users = await getUser()
    console.log(users)
}

main()