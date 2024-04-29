export const getStudent = (req, res) => {
    res.status(200).json({ msg : req.body})
}