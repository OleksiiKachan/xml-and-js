const { default: axios } = require("axios");

const token = process.env.LOTR_TOKEN;
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
    book1.chapters=chapters1
    const book2=JSON.parse(books.data).docs[1];
    book2.chapters=chapters2
    const book3=JSON.parse(books.data).docs[2];
    book3.chapters=chapters3

    return { code: 200, data: JSON.stringify({book1,book2,book3}) };
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
