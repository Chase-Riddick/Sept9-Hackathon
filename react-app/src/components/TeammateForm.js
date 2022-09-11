import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState} from 'react';
import { Button, Form } from 'react-bootstrap'

export default function TeammateForm () {
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

        if (errors.length) {
            setErrors([...errors]);
            return;
          }

          const payload = {
            first_name: firstName,
            last_name: lastName,
            pronunciation,
            pronouns,
            q1_ans: q1Ans,
            q2_ans: q2Ans,
            q3_ans: q3Ans,
            img_url
        };

        let res = await dispatch();

        // setTimeout(() =>{
        //       history.push(`/`)
        //     }, "1500")
        history.push(`/`)
      }


    return (
        <Form class="">
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"  onChange={updateFirstName} />
            </Form.Group>

            {/* <div className='table-row'>
            <div className='table-row-label-block'>
            <h5 className='table-row-label'>{language && language === 'English' ? English.Fish : Chinese.Fish} </h5>
            <p className='required'>*</p>
            </div>
            <input
                type="text"
                placeholder=""
                className='input'
                value={firstName}
                maxLength={20}
                onChange={updateFirstName} />
            </div> */}

        </Form>

    )
}