package com.gsoft.pokeapp.ui.mainScreen

import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.gsoft.pokeapp.data.models.Producto
import com.gsoft.pokeapp.databinding.ItemProductoRowBinding
import javax.inject.Inject

class AllProductsAdapter @Inject constructor(
     val mContext: Context,
)
    : ListAdapter<Producto, AllProductsAdapter.ViewHolder>(Comparator){

    val context = mContext

    private var listener: ((item: Producto) -> Unit)? = null

    fun setOnItemClickListener(listener: (item: Producto) -> Unit) {
        this.listener = listener
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder =
        ViewHolder(
            ItemProductoRowBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            ),
            context
        )

    override fun onBindViewHolder(holder: ViewHolder, position: Int) =
        holder.bind(
            getItem(position),
            position,
            itemCount,
            listener
        )

    class ViewHolder(
        private val itemBinding: ItemProductoRowBinding,
        val context : Context
    ) : RecyclerView.ViewHolder(itemBinding.root) {

        fun bind(
            producto: Producto,
            position: Int,
            size: Int,
            listener: ((item: Producto) -> Unit)?
        ) {
            //bindBackground(itemView, position, size)
            itemBinding.apply {
               /* tvDescription.text = order.description */
                tvTitulo.text = producto.nombre
                tvPrecio.text =producto.precio
                Glide.with(context).load(producto.imagen)
                    .centerCrop().into(imgProducto)
                root.setOnClickListener { listener?.invoke(producto) }
            }
        }
    }

    object Comparator : DiffUtil.ItemCallback<Producto>() {
        override fun areItemsTheSame(oldItem: Producto, newItem: Producto): Boolean =
            oldItem.id == newItem.id

        override fun areContentsTheSame(oldItem: Producto, newItem: Producto): Boolean =
            oldItem == newItem
    }
}