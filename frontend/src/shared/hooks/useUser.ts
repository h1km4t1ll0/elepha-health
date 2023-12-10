import {getUser, StorageUser} from "shared/storage";
import {useState} from "react";

export function useUser (): StorageUser | null {
    const [user, setUser] = useState<StorageUser | null>(null);
    getUser().then(result => setUser(result));
    return user;
}
