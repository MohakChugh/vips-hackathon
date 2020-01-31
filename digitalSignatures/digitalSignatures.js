const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const salt = 10;

const digitalSignature = async (problemid, userid) => {
    // hex is generated
    let hex = problemid.toString() + userid.toString()
    let encryptedHex = ''

    // hex is encrypted and saved in encryptedhex
    encryptedHex = await bcrypt.hash(hex, salt)
        .then(async hash => {
            encryptedHex = hash
            return encryptedHex
        })
    
    // encryptedhex is signed
    let digitalSign = jwt.sign({ encryptedHex }, config.EncryptionSecretKey)

    // encrypted hex is returned
    return digitalSign
}

const verifyDigitalSignature = async (signature, problemid, userid) => {
    var decodedstring = ''

    // generating new hex for comparision
    let hex = problemid.toString() + userid.toString()

    decodedstring = await jwt.verify(signature, config.EncryptionSecretKey, (err, dec) => {
        decodedstring = dec.encryptedHex
        return decodedstring
    });
    // decoded stores encrypted value

    let isVerified = await bcrypt.compare(hex, decodedstring)
    return isVerified
}
// main = async () => {

//     let sig = await digitalSignature(123456, 23456)
//     console.log(await verifyDigitalSignature("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWRIZXgiOiIkMmIkMTAkMjBxLllaa1ZiRXFrYjBFd0dhbU5tLkVUalY1Ynp0Z25ZOUlQRGRwcjJXNmRtSmo2Lm9BWU8iLCJpYXQiOjE1ODA0NzUyMzB9.uwJi8oFSxbYtYWq1VaxLM2HzRZbEg2xTjyOy69zdfgh", 123456, 23456))
    
// }
// main()

exports.verifyDigitalSignature = verifyDigitalSignature
exports.digitalSignature = digitalSignature