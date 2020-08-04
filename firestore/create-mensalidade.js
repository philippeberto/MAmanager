const admin = require("firebase-admin");

const serviceAccount = require("../firestore.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gym-bd.firebaseio.com"
});

const db = admin.firestore()

const aluno = 'DZnUVpsxWslx74zamyNL'
const alunoRef = db.collection('alunos').doc(aluno)
var data = new Date()

const doc = db.collection('mensalidades').doc()
doc.set({
  mensalidade: 60,
  data,
  aluno: alunoRef
})
  .then(snap => {
    console.log(snap)
  })
