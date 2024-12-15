import { THintsState } from './save_hints_state_in_LS';

function getUserHintSateFromLS(): THintsState | undefined {
  const userHintState: string | null = localStorage.getItem(
    'UserPuzzleHintsState'
  );
  if (userHintState) {
    const userHintStateData = JSON.parse(userHintState);
    return userHintStateData;
  }
  return;
}

export default getUserHintSateFromLS;
