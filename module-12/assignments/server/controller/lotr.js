const { default: axios } = require("axios");

const token = `WHl-mwhsBxmD1LqQBWnx` //process.env.LOTR_TOKEN;
const endpoint = `https://the-one-api.dev/v2`;

const getAllBooks = async () => {
  try {
    const { data } = await axios.get(`${endpoint}/book`);

    return { code: 200, data: JSON.stringify(data) };
  } catch (error) {
    return {
      code: 500,
      data: { message: error.message },
    };
  }
};

const getChapter = async () => {
  try {
    const { data } = await axios.get(`${endpoint}/chapter`, {
        headers: { Authorization: "Bearer " + token },
    });

    const {chapters1, chapters2, chapters3} = data.docs.reduce((acc, chapter)=>{
        if(chapter.book === "5cf5805fb53e011a64671582"){
            acc.chapters1.push(chapter.chapterName);
        }else if (chapter.book === "5cf58077b53e011a64671583"){
            acc.chapters2.push(chapter.chapterName);
        }else{
            acc.chapters3.push(chapter.chapterName);
        }

        return acc;
    },
    {chapters1:[],chapters2:[],chapters3:[]});

    const books = await getAllBooks()
    const book1=JSON.parse(books.data).docs[0];
    const book2=JSON.parse(books.data).docs[1];
    const book3=JSON.parse(books.data).docs[2];

    // let book1 = books[0].push(chapters1)

    return { code: 200, data: JSON.stringify({book1,chapters1}) };
  } catch (error) {
    return {
      code: 500,
      data: { message: error.message },
    };
  }
};


module.exports = {
  getAllBooks,
  getChapter
};
