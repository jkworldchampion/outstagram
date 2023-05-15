import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-83nfc3.png',
    likedimageUrl: 'https://image.similarpng.com/very-thumbnail/2021/08/Instagram-Likes-icon-on-trabsparent-background-PNG.png',
  },
  {
    name: 'Comment',
    imageUrl: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Speach-Bubble-11-icon.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://www.pngkit.com/png/full/188-1882778_icon-icon-icon-icon-instagram-share-icon-png.png',
  },
  {
    name: 'Save',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/5662/5662990.png'
  },
]

const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 30 }}>
    <Divider width={1} orientation='vertical' />
    <PostHeader post={post} />
    <PostImage post={post} />
    <View style={{marginHorizontal: 15, marginTop: 10 }}>
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentsSection post={post} />
      <Comments post={post} />
    </View>
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{color: 'black', marginLeft: 5, fontWeight: '700'}}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: 'black', fontWeight:'900' }}>...</Text>
  </View>
)

const PostImage = ({ post }) => {
  return (
    <View style={{width: '100%', height: 450}}>
      <Image source={{uri: post.imageurl}} style={{height: '100%', resizeMode: 'cover'}}/>
    </View>
  )
}

const PostFooter = () => (
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end'}}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
    </View>
  </View>

)

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
)

const Likes = ({ post }) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{ color: 'black', fontWeight: '600'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{ color: 'black' }}>
      <Text style={{ fontWeight: '600' }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
)

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{color: 'gray'}}>
        View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
) 

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 3 }}>
        <Text style={{ color: 'black' }}>
          <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },

  footerIcon: {
    width: 30,
    height: 30,
  },

  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  }
})

export default Post
