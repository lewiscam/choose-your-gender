import { Injectable, signal } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Gender } from '../types/gender.interface';
import { getRandomAsciiCharacter } from '../utils/random-ascii';

@Injectable({
  providedIn: 'root',
})
export class GendersService {
  firestore: Firestore;
  gendersCollection: CollectionReference;
  genders = signal<Gender[] | []>([]);

  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.gendersCollection = collection(firestore, 'genders');
  }

  async fetchGenders() {
    const gendersData = await getDocs(this.gendersCollection);
    console.log(gendersData);
    this.genders.set(gendersData.docs.map((c) => ({ ...(c.data() as Gender) })));
  }

  addGender(genderName: string) {
    const existingGender = this.genders().find(
      (gender) => gender.gender === genderName.toLowerCase(),
    );
    if (existingGender) {
      const docReference = doc(this.firestore, 'genders', genderName.toLowerCase());
      setDoc(doc(this.gendersCollection, existingGender.gender.toLowerCase()), {
        ...existingGender,
        count: existingGender.count + 1,
      });
    } else {
      const firstLetter = genderName.charAt(0).toUpperCase();
      const symbols = this.genders().map((gender) => gender.symbol);
      const newGender: Pick<Gender, 'gender' | 'symbol'> = {
        gender: genderName,
        symbol: this.symbolExists(firstLetter) ? getRandomAsciiCharacter(symbols) : firstLetter,
      };
      setDoc(doc(this.gendersCollection, newGender.gender.toLowerCase()), {
        ...newGender,
        count: 1,
      });
    }
    this.fetchGenders();
  }

  private symbolExists(firstLetter: string): boolean {
    return this.genders().some((gender) => gender.symbol === firstLetter);
  }
}
