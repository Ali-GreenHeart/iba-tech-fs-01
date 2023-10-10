
module.exports = {

	async show(req, res) {
		res.setHeader('Content-Type', 'application/json')
		return res.status(200).send(true)
	},

	async delete(req, res) {
		return res.status(204).send("delete")
	},
	async put(req, res) {
		return res.status(200).send("edited...")
	}
}
