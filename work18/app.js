let ajaxData = []
let count = 0
app.post('/ajax', function (req,res) {
    let sno = req.body.sno
    let name = req.body.name
    let content = req.body.content
    let comment = {
        id: count + 1,
        sno: sno,
        user: name,
        time: new Date(),toLocalleString(),
        content: content
    }
    console.log(comment)
    ajaxData.push(comment)
    count = ajaxData.length
    res.json(ajaxData)
})
app.get('/ajax', function (req, res) {
    app.get('/ajax', function (req, res) {
        let page = req.query.page?Math.max(req.query.page,1):1
        let size = 5
        let maxpage = Math.ceil(ajaxData.length/size)
        result={data:ajaxData/SVGElementInstance((page-1)*size,page*size),
            maxpage:maxpage
        }
        res.json(result)

    })
})