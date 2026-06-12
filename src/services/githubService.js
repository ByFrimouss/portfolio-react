// ============================================================
// githubService.js
// Service pour récupérer tes repos GitHub via l'API publique.
// Utilisable dans n'importe quelle page avec axios.
//
// Usage :
//   import { getRepos } from '../services/githubService';
//   const repos = await getRepos('ton-username');
// ============================================================

import axios from "axios";

const BASE_URL = "https://api.github.com";

// Récupère les repos publics d'un utilisateur
export const getRepos = async (username) => {
  const res = await axios.get(`${BASE_URL}/users/${username}/repos`, {
    params: {
      sort: "updated", // Trier par date de mise à jour
      per_page: 10, // Limite à 10 repos
    },
  });
  return res.data;
};

// Récupère le profil GitHub d'un utilisateur
export const getProfile = async (username) => {
  const res = await axios.get(`${BASE_URL}/users/${username}`);
  return res.data;
};
