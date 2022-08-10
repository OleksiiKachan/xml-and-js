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

const getAllMovies = async () => {
  try {
    const { data } = await axios.get(`${endpoint}/movie`, {
      headers: { Authorization: "Bearer " + token },
    });

    return { code: 200, data: JSON.stringify(data) };
  } catch (error) {
    return {
      code: 500,
      data: { message: error.message },
    };
  }
};

const getAllChapters = async () => {
  try {
    const { data } = await axios.get(`${endpoint}/chapter`, {
      headers: { Authorization: "Bearer " + token },
    });;
    return { code: 200, data: JSON.stringify(data) };
  } catch (error) {
    return { code: 500, data: JSON.stringify({ message: error.message }) };
  }
};

const getAllBookChapters = async () => {
  try {
    const booksData = await Promise.all([getAllBooks(), getAllChapters()]);
    const books =
      booksData && booksData[0] && booksData[0].data
        ? JSON.parse(booksData[0].data)
        : [];
    const chapters =
      booksData && booksData[1] && booksData[1].data
        ? JSON.parse(booksData[1].data)
        : [];
    const data =
      books && books.docs
        ? books.docs.map((book) => {
            const chaptersOfBook =
              chapters && chapters.docs
                ? chapters.docs.filter(chapter => chapter.book === book._id)
                : [];
            return {
              ...book,
              chapters: chaptersOfBook.map(chapter => chapter.chapterName),
            };
          })
        : [];
    return { code: 200, data: JSON.stringify(data) };
  } catch (error) {
    return {
      code: 500,
      data: JSON.stringify({ message: error.message }),
    };
  }
};

module.exports = {
  getAllBooks,
  getAllMovies,
  getAllBookChapters
};
