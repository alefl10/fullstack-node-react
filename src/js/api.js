import axios from 'axios';

exports.fetchContest = contestId =>
  axios.get(`/api/contestData/${contestId}`)
    .then(resp => resp.data)
    .catch((err) => {
      console.log(err);
    });
