export default (req, res) => {
  res.status(200).json({ text: process.env.API_HOST })
}
