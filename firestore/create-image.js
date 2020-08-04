const admin = require("firebase-admin");

const serviceAccount = require("../firestore.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gym-bd.firebaseio.com"
});

const db = admin.firestore()

const alunoId = 'DZnUVpsxWslx74zamyNL'
const alunoRef = db.collection('alunos').doc(alunoId)
var data = new Date()

const doc = db.collection('alunos').doc(alunoId)
doc.update({
  urlImagem: "http://imagem.com/img.jpeg"
})
  .then(snap => {
    console.log(snap)
  })
