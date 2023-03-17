const { Artists } = require('../models')

const GetArtists = async (req, res) => {
  try {
    const artists = await Artists.findAll()
    res.send(artists)
  } catch (error) {
    throw error
  }
}

const CreateArtists = async (req, res) => {
  try {
    const artists = await Artists.create({ ...req.body })
    res.send(artists)
  } catch (error) {
    throw error
  }
}

const UpdateArtists = async (req, res) => {
  try {
    const artists = await Artists.update(
      { ...req.body },
      { where: { id: req.params.artist_id }, returning: true }
    )
    res.send(artists)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetArtists,
  CreateArtists,
  UpdateArtists,
}
