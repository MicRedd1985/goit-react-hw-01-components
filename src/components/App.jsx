import { Profile } from "./Profile/Profile"; 
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from '../Data/user';
import data from '../Data/data';
import friends from '../Data/friends';
import transactions from '../Data/transactions';
	

	export const App = () => {
	  return (
	    <div
	      style={{
	        height: 'auto',
	        display: 'flex',
	        flexDirection: "column",
	        justifyContent: 'center',
	        alignItems: 'center',
	        fontSize: 20,
	        color: '#010101',
	      }}
	    >
	      <Profile avatar={user.avatar}
	      username={user.username}
	      tag={user.tag}
	      location={user.location}
	      followers={user.stats.followers}
	      views={user.stats.views}
	      likes={user.stats.likes}
	      />
	      <Statistics title="Upload stats" stats={data} />
	      <FriendList friends={friends} />
	      <TransactionHistory items={transactions} />
	      
	      </div>
	  );
	};
