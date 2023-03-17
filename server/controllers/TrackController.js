const { Tracks } = require('../models')

const GetTracks = async (req, res) => {
  try {
    const tracks = await Tracks.findAll()
    res.send(tracks)
  } catch (error) {
    throw error
  }
}

const CreateTrack = async (req, res) => {
  try {
    const track = await Tracks.create({ ...req.body })
    res.send(track)
  } catch (error) {
    throw error
  }
}

const UpdateTrack = async (req, res) => {
  try {
    const track = await Tracks.update(
      { ...req.body },
      { where: { id: req.params.post_id }, returning: true }
    )
    res.send(track)
  } catch (error) {
    throw error
  }
}

const DeleteTrack = async (req, res) => {
  try {
    await Tracks.destroy({ where: { id: req.params.post_id } })
    res.send({ msg: 'Tracks Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetTracks,
  CreateTrack,
  UpdateTrack,
  DeleteTrack
}
