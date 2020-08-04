const admin = require("firebase-admin");

const serviceAccount = require("../firestore.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gym-bd.firebaseio.com"
});

const db = admin.firestore()

const doc = db.collection('alunos').doc()
doc.set({
  aluno: 'aluno criado via código'
})
  .then(snap => {
    console.log(snap)
  })
