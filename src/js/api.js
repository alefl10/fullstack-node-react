import axios from 'axios';

exports.fetchContest = contestId =>
  axios.get(`/api/contests/${contestId}`)
    .then(resp => resp.data)
    .catch((err) => {
      console.log(err);
    });
