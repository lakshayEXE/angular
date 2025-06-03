const { error } = require('console');
const fs = require('fs');

// CRUD 

// create 
exports.addBooks = (req,res) => {
    const book = req.body;

    if(!book.id || !book.title || !book.author){
        return res.status(400).json({error : "missing field"})
    }
  
    let books = [];

    // previous data add krne k liye 
    if(fs.existsSync('book.json')){
        const data = fs.readFileSync('book.json' ,'utf8');
        if(data){
            books = JSON.parse(data);
        }
    }

    //checking the duplicate 
    const duplicate = books.find(b=> (b.id === book.id 
        || b.title === book.title))
    if(duplicate){
        return res.status(400).json({error:'Duplicate book detected'})
    }


    books.push(book);
    fs.writeFileSync('book.json' , JSON.stringify(books,null,2),'utf8');
    res.status(201).json({message: ' Book added Successfully' , book});
}

// read 
exports.getAllBooks = (req,res) =>{
    const filePath = 'book.json';

    if(!fs.existsSync(filePath)){
        return res.status(200).json({books:[]});
    }

    const data = fs.readFileSync(filePath ,'utf-8');
    let books = [];

    if(data){
        books = JSON.parse(data);
    }

    res.status(200).json({books});
}

// delete 
exports.deleteBook = (req,res)=>{
    const bookId = req.params.id;
    const filePath  = 'book.json';

    if(!fs.existsSync(filePath)){
        return res.status(404).json({error:"No book with same id found"})
    }

    const data = fs.readFileSync(filePath,'utf-8')
    let books = [];

    if(data){
        books = JSON.parse(data);
    }


    //find index function search kre ga id 
    const index = books.findIndex(b => b.id === bookId)

    if(index ===-1){
        return res.status(404).json({error: 'Book not found'});
    }
    books.splice(index,1);
    fs.writeFileSync(filePath, JSON.stringify(books,null,2),'utf-8');

    res.status(200).json({message:`Book ${bookId} deleted successfully`})
}

//update 
exports.updateBooktitle = (req,res)=>{
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body.title;

    const filePath ='book.json';

    if(!updatedBook){
        return res.status(400).json({error:'New title is required'})
    }

    if(!fs.existsSync(filePath)){
        return res.status(404).json({error :'No books found'});
    }

    const data = fs.readFileSync(filePath,'utf-8');
    let books = [];

    if(data){
        books = JSON.parse(data);
    }

    const bookIndex = books.findIndex(book =>{
        book.id === bookId});

    if(bookIndex ===-1){
        return res.status(404).json({error:'Book with given ID not found'})
    }

    book[bookIndex].title = updatedBook
    res.status(200).json({message:'Book title Updated',book : books[bookIndex]});
};
