
export default (req, res) => {
    let id = req.query.id;

    res.statusCode = 200
    res.json({ wtf: id })
}
