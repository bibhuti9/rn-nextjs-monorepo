import { useEffect, useState } from "react";
import { getGithubUsers } from "../../../../apps/web/app/api/profile";
export const getUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await getGithubUsers();
      setUsers(result.items);
    })();
  }, []);
  return { users };
};
