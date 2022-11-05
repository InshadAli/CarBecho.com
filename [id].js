import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  const paths = data.map((item)=>{
    return {
      params:{
        id:item.id.toString()
      }
    }
  })

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async(context)=>{
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  return {
    props:{data}
  }
}


function BlogNumber({data}) {
  console.log(data);
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    <div  className={styles.blogH1}>
        <h1>blog {data.id} content</h1>
        <h2>{data.title}</h2>
        <h2>{data.body}</h2>
    </div>
  )
}

export default BlogNumber;