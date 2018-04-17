import axios from 'axios';

exports.fetchContest = contestId =>
  axios.get(`/api/contestData/${contestId}`)
    .then(resp => resp.data)
    .catch((err) => {
      console.log(err);
    });

exports.fetchContestList = () =>
  axios.get('/api/contestData')
    .then(resp => resp.data.contests)
    .catch((err) => {
      console.log(err);
    });

exports.fetchNames = nameIds =>
  axios.get(`/api/names/${nameIds.join(',')}`)
    .then(resp => resp.data.names)
    .catch((err) => {
      console.log(err);
    });
