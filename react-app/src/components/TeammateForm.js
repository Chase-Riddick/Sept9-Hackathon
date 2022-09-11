import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState} from 'react';
import { Button, Form } from 'react-bootstrap'
import { useDataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';



export default function TeammateForm () {
    const userParam = Number(useParams().userId)
    console.log(userParam)
    const { questions } = useDataContext();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pronunciation, setPronunciation] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [img_url, setImageUrl] = useState(null);
    const [q1Ans, setQ1Ans] = useState('');
    const [q2Ans, setQ2Ans] = useState('');
    const [q3Ans, setQ3Ans] = useState('');

    const updateFirstName = (e) => setFirstName(e.target.value);
    const updateLastName = (e) => setLastName(e.target.value);
    const updatePronunciation = (e) => setPronunciation(e.target.value);
    const updatePronouns = (e) => setPronouns(e.target.value);
    const updateQ1Ans = (e) => setQ1Ans(e.target.value);
    const updateQ2Ans = (e) => setQ2Ans(e.target.value);
    const updateQ3Ans = (e) => setQ3Ans(e.target.value);

    const handleCancelClick = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setPronunciation('');
        updatePronouns('');
        updateQ1Ans('');
        updateQ2Ans('');
        updateQ3Ans('');
        history.push(`/`)
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!firstName) {
            errors["firstName"] = true;
            console.log(errors)
        }

        if (!lastName) {
            errors["firstName"] = true;
        }

        if (!pronunciation) {
            errors["pronunciation"] = true;
        }

        if (!pronouns) {
            errors["pronouns"] = true;
        }

        if (!q1Ans) {
            errors["q1Ans"] = true;
        }

        if (!q2Ans) {
            errors["q2Ans"] = true;
        }

        if (!q3Ans) {
            errors["q3Ans"] = true;
        }

        if (Object.entries(errors).length) {
            setErrors(errors);
            return;
          }

        const form = new FormData();

            form.append('first_name', firstName);
            form.append('last_name', lastName);
            form.append('pronunciation', pronunciation);
            form.append('pronouns', pronouns);
            form.append('q1_ans', q1Ans);
            form.append('q2_ans', q2Ans);
            form.append('q3_ans', q3Ans);

        if (img_url !== null) {form.append('img_url', img_url)};

        const response = await fetch(`/api/users/create_teammate/${userParam}`, {
                  method: "POST",
                  body: form
                });

        const responseData = await response.json();
        console.log(responseData)

        // export const updateCatch = (payload) => async (dispatch) => {

        //     const {
        //       id,
        //       img,
        //       fish,
        //       description,
        //       length,
        //       weight,
        //       bait,
        //       lure,
        //       long,
        //       lat
        //     } = payload

        //     const form = new FormData();


        //     form.append('id', id);
        //     if (img !== null) {form.append('img', img)};
        //     form.append('fish', fish);
        //     form.append('description', description);
        //     form.append('length', length);
        //     form.append('weight', weight);
        //     form.append('bait', bait);
        //     form.append('lure', lure);
        //     form.append('long', long);
        //     form.append('lat', lat);



        //     const response = await fetch('/api/catches', {
        //       method: "PUT",
        //       body: form
        //     });


        //   if (response.ok) {
        //     const data = await response.json();
        //     if (data.errors) {
        //       return data;
        //     }

        //     dispatch(modification(data));
        //     return null
        //   }
        //   }

        // setTimeout(() =>{
        //       history.push(`/`)
        //     }, "1500")
        history.push(`/`)
      }


    return (
        <div className='form-container'>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formFirstName' className='form-group'>
                <Form.Label className='font-weight-bold' >First Name</Form.Label>
                <Form.Control className={errors.firstName ? 'errors' : ''} type="text"  value={firstName} onChange={updateFirstName} maxLength={25} />
            </Form.Group>

            <Form.Group controlId='formLastName' className='form-group'>
                <Form.Label >Last Name</Form.Label>
                <Form.Control type="text"  value={lastName} onChange={updateLastName} maxLength={25} />
            </Form.Group>

            <Form.Group controlId='formPronunciation' className='form-group'>
                <Form.Label >Pronunciation</Form.Label>
                <Form.Control type="text"  value={pronunciation} onChange={updatePronunciation} maxLength={25} />
            </Form.Group>

            <Form.Group controlId='formPronouns' className='form-group'>
                <Form.Label>Pronouns</Form.Label>
                <Form.Control type="text"  value={pronouns} onChange={updatePronouns} maxLength={25} />
            </Form.Group>

            <Form.Group controlId='formQ1' className='form-group'>
                <Form.Label>{`Question 1: ${questions[1]}`}</Form.Label>
                <Form.Control type="text"  value={q1Ans} onChange={updateQ1Ans} maxLength={80} />
            </Form.Group>

            <Form.Group controlId='formQ2' className='form-group'>
                <Form.Label>{`Question 2: ${questions[2]}`}</Form.Label>
                <Form.Control type="text"  value={q2Ans} onChange={updateQ2Ans} maxLength={80} />
            </Form.Group>

            <Form.Group controlId='formQ3' className='form-group'>
                <Form.Label>{`Question 3: ${questions[3]}`}</Form.Label>
                <Form.Control type="text"  value={q3Ans} onChange={updateQ3Ans} maxLength={80} />
            </Form.Group>

            <Button className="form-btn" type="submit">Share Info</Button>
        </Form>
        </div>

    )
}