import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Button, Divider, List } from 'antd';
import styles from './styles.module.css';
import { GET_PARTICIPANTS } from '../queries';
import NewParticipantForm from './NewParticipantForm';

function Participants({ event }) {
  const [btnIsVisible, setBtnIsVisible] = useState(true);

  const [getParticipants, { loading, data,}] = useLazyQuery(GET_PARTICIPANTS, {
    variables: { id: event },
  });

 

  useEffect(() => {
    if (!loading && data) {
      setBtnIsVisible(false);
    }
  }, [loading, data]);

  return (
    <div>
      <Divider>⮟ Participants ⮟ </Divider>
      {btnIsVisible && (
        <div className={styles.showParticipantsBtn}>
          <Button loading={loading} onClick={() => getParticipants()}>
            Show Participants
          </Button>
        </div>
      )}
      {!loading && data && (
        <>
          <List
            itemLayout="horizontal"
            dataSource={data.event.participants}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={`User: ${item.user.username}`} description={`Email: ${item.user.email}`} />
              </List.Item>
            )}
          />
          <NewParticipantForm event={event} />
        </>
      )}
    </div>
  );
}

export default Participants;
