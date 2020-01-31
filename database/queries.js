const graphqlrequest = require('graphql-request')
const GraphQLClient = graphqlrequest.GraphQLClient

const insertUser = async (phoneNumber, password, name, email, area) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_user(objects: {phoneNumber: "${phoneNumber}", 
        password: "${password}", 
        name: "${name}", 
        email: "${email}", 
        area: "${area}"}) {
            affected_rows
            returning {
                id
            }
        }
    }`

    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getAllAreasInfo = async () => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        area {
            areaName
            govtId
            id
        }
    }`

    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getUserByEmail = async (email) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        user(where: {email: {_eq: "${email}"}}) {
            area
            areaid
            email
            name
            id
            phoneNumber
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getUserPassword = async (email) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        user(where: {email: {_eq: "${email}"}}) {
                password
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const insertProblem = async (areaid, department, image_url, description, title, userid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_problems(objects: {
            areaid: "${areaid}", 
            citizen_id: "${userid}", 
            department: "${department}", 
            description: "${description}", 
            image_url: "${image_url}", 
            status: "Submitted", 
            title: "${title}", 
            }) {
            affected_rows
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};


const getProblem = async () => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })

    const query = `query MyQuery {
        problems {
            areaid
            citizen_id
            department
            description
            digiSignature_Count
            downvote
            image_url
            id
            originTime
            resolveTime
            status
            title
            upvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getProblemByAreaID = async (areaid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        problems(where: {areaid: {_eq: "${areaid}"}}) {
            areaid
            citizen_id
            department
            description
            downvote
            digiSignature_Count
            id
            image_url
            originTime
            resolveTime
            status
            title
            upvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getProblemByUser = async (userid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        problems(where: {citizen_id: {_eq: "${userid}"}}) {
            areaid
            citizen_id
            department
            description
            downvote
            digiSignature_Count
            id
            image_url
            originTime
            resolveTime
            status
            title
            upvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getProblemByDepartent = async (department) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        problems(where: {department: {_eq: "${department}"}}) {
            areaid
            citizen_id
            department
            description
            downvote
            digiSignature_Count
            id
            image_url
            originTime
            resolveTime
            status
            title
            upvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const upvoteProblem = async (problemid, incrementedUpvote) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        update_problems(where: {id: {_eq: "${problemid}"}}, _set: {upvote: "${incrementedUpvote}"}) {
            affected_rows
            returning {
                upvote
            }
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const fetchUpvoteProblem = async (problemid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        problems(where: {id: {_eq: "${problemid}"}}) {
            upvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const downvoteProblem = async (problemid, incrementedDownvote) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        update_problems(where: {id: {_eq: "${problemid}"}}, _set: {downvote: "${incrementedDownvote}"}) {
            affected_rows
            returning {
                downvote
            }
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const fetchDownvoteProblem = async (problemid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        problems(where: {id: {_eq: "${problemid}"}}) {
            downvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};


const deleteProblem = async (problemid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const insertOfficial = async (name, password, email, phone, department, areaid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_govtOfficials(objects: {
            areaid: "${areaid}", 
            department: "${department}", 
            email: "${email}", 
            name: "${name}", 
            password: "${password}", 
            phone: "${phone}"}) {
                affected_rows
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getOfficialPassword = async (email) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        __typename
        govtOfficials(where: {email: {_eq: "${email}"}}) {
            password
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

/**
 * Link Area tables and govt officials area id
 * and Update queries 
 */
const getOfficialByArea = async (areaid) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        govtOfficials(where: {areaid: {_eq: "${areaid}"}}) {
            department
            email
            name
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const insertDigitalSignatures = async (problemID, userID, signature) => {
    const client = new GraphQLClient('https://vips-citizenapp-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_digitalSignatures(objects: {problemID: "${problemID}", userID: "${userID}", digitalSignature: "${signature}"}) {
            affected_rows
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

exports.insertUser = insertUser
exports.getUserByEmail = getUserByEmail
exports.getUserPassword = getUserPassword
exports.insertProblem = insertProblem
exports.getProblem = getProblem
exports.getProblemByAreaID = getProblemByAreaID
exports.getProblemByUser = getProblemByUser
exports.getProblemByDepartent = getProblemByDepartent
exports.upvoteProblem = upvoteProblem
exports.fetchUpvoteProblem = fetchUpvoteProblem
exports.downvoteProblem = downvoteProblem
exports.fetchDownvoteProblem = fetchDownvoteProblem
exports.deleteProblem = deleteProblem
exports.insertOfficial = insertOfficial
exports.getOfficialPassword = getOfficialPassword
exports.getAllAreasInfo = getAllAreasInfo
exports.getOfficialByArea = getOfficialByArea
exports.insertDigitalSignatures = insertDigitalSignatures
