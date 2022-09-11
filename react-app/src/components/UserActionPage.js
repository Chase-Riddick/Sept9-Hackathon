import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function UserActionPage() {
    const sessionUser = useSelector(state => state.session.user);


  return (
    <div className='user-action-page-container'>

        <Form>
        <Form.Group className='share_join_link-container'>
        <Form.Label>Share Link:</Form.Label>
        <Form.Control
          name='link'
          type='text'
          value={`http://localhost:3000/teams/${sessionUser.id}/add_teammate`}
        />
      </Form.Group>
      </Form>
        <div className='game_menu'>
            <h3>Lobby Games</h3>
            <div className='game_item'>
                <div className='game_description'>
                <h4>Game Name</h4>
                    jvrvnjvn;jvrvnjvn;jvrvnjvn
                    </div>
                <div className='game_button_container'><button>Start</button></div>
            </div>

            <div className='game_item'>
                <div className='game_description'>
                    <h4>Game Name</h4>
                    jvrvnjvn;jvrvnjvn;jvrvnjvn
                    </div>
                <div className='game_button_container'><button>Start</button></div>
            </div>

            <div className='game_item'>
                <div className='game_description'><h4>Game Name</h4>
                    jvrvnjvn;jvrvnjvn;jvrvnjvn
                    </div>
                <div className='game_button_container'><button>Start</button></div>
            </div>
        </div>
    </div>
  );
}
export default UserActionPage;