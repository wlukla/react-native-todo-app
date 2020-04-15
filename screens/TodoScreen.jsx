import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { updateTodoInActive, updateTodoInArchive } from '../redux/actions';

const TodoScreen = ({ route, updateTodoInActive, updateTodoInArchive }) => {
  const { todo, isActive } = route.params;

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleTitleChange = (newTitle) => {
    isActive
      ? updateTodoInActive({ ...todo, title: newTitle })
      : updateTodoInArchive({ ...todo, title: newTitle });
  };

  const handleDescriptionChange = (newDescription) => {
    isActive
      ? updateTodoInActive({ ...todo, description: newDescription })
      : updateTodoInArchive({ ...todo, description: newDescription });
  };

  return (
    <Container>
      <Main>
        <TodoTitle
          value={title}
          onChangeText={setTitle}
          onEndEditing={handleTitleChange.bind(null, title)}
        />
        <TodoDescription
          value={description}
          multiline
          numberOfLines={4}
          onChangeText={setDescription}
          onEndEditing={handleDescriptionChange.bind(null, description)}
        />
      </Main>
    </Container>
  );
};

const TodoTitle = styled.TextInput`
  padding: 20px 10px 14px;
  font-size: 30px;
  font-weight: bold;
  border-color: #cecece;
  border-bottom-width: 2px;
`;

const TodoDescription = styled.TextInput`
  padding: 20px 10px 14px;
  color: #484848;
  font-size: 16px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const Main = styled.View`
  padding: 10px;
`;

const mapDispatchToProps = {
  updateTodoInActive,
  updateTodoInArchive,
};

export default connect(null, mapDispatchToProps)(TodoScreen);
